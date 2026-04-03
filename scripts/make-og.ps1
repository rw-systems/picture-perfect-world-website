# Regenerates public/og.png to match the marketing landing page (1200x630).
Add-Type -AssemblyName System.Drawing

function New-RoundedRectPath([float]$x, [float]$y, [float]$width, [float]$height, [float]$r) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $width - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $width - $d, $y + $height - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $height - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  return $path
}

$w = 1200
$h = 630
$bmp = New-Object System.Drawing.Bitmap $w, $h
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = "AntiAlias"
$g.TextRenderingHint = "AntiAlias"
$g.InterpolationMode = "HighQualityBicubic"
$g.PixelOffsetMode = "HighQuality"

# Base (matches bg-[#fff8f3])
$g.Clear([System.Drawing.Color]::FromArgb(255, 255, 248, 243))

# Gradient wash: from-[#ffe8f4] via-[#fff5eb] to-[#d4f4ea] (approx diagonal)
$p1 = New-Object System.Drawing.Point 0, 0
$p2 = New-Object System.Drawing.Point $w, $h
$wash = New-Object System.Drawing.Drawing2D.LinearGradientBrush $p1, $p2,
  ([System.Drawing.Color]::FromArgb(200, 255, 232, 244)),
  ([System.Drawing.Color]::FromArgb(200, 212, 244, 234))
$g.FillRectangle($wash, 0, 0, $w, $h)
$wash.Dispose()

# Soft blobs (same hexes as landing, reduced alpha)
$blobs = @(
  @{ cx = 180; cy = 120; rw = 520; rh = 520; c = [System.Drawing.Color]::FromArgb(100, 255, 158, 205) },
  @{ cx = 980; cy = 180; rw = 420; rh = 420; c = [System.Drawing.Color]::FromArgb(95, 126, 232, 200) },
  @{ cx = 400; cy = 520; rw = 480; rh = 480; c = [System.Drawing.Color]::FromArgb(90, 255, 224, 102) }
)
foreach ($b in $blobs) {
  $br = [System.Drawing.SolidBrush]::new($b.c)
  $g.FillEllipse($br, $b.cx - $b.rw / 2, $b.cy - $b.rh / 2, $b.rw, $b.rh)
  $br.Dispose()
}

# Dot grid (24px, subtle purple)
for ($dx = 0; $dx -lt $w; $dx += 24) {
  for ($dy = 0; $dy -lt $h; $dy += 24) {
    $db = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(55, 200, 180, 220))
    $g.FillEllipse($db, $dx, $dy, 2, 2)
    $db.Dispose()
  }
}

# --- Center column (like max-w-lg) ---
$cw = 520
$cx0 = ($w - $cw) / 2
$cy = 88

# Top pill
$pillPath = New-RoundedRectPath $cx0 $cy $cw 46 23
$pillBg = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(230, 255, 255, 255))
$pillBorder = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(255, 45, 38, 64), 2)
$g.FillPath($pillBg, $pillPath)
$g.DrawPath($pillBorder, $pillPath)
$pillFont = [System.Drawing.Font]::new("Segoe UI", 18.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$pillBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 92, 77, 122))
$sfCenter = New-Object System.Drawing.StringFormat
$sfCenter.Alignment = "Center"
$sfCenter.LineAlignment = "Center"
$g.DrawString("Playful worlds from real rooms", $pillFont, $pillBrush, [System.Drawing.RectangleF]::new($cx0, $cy, $cw, 46), $sfCenter)
$pillPath.Dispose()
$pillBg.Dispose()
$pillBorder.Dispose()
$pillFont.Dispose()
$pillBrush.Dispose()

# Title: Picture (blue) + Perfect (gradient-ish) + World (green)
$ty = $cy + 70
$fontP = [System.Drawing.Font]::new("Segoe UI", 58.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$s1 = "Picture"
$s2 = "Perfect"
$s3 = "World"
$sz1 = $g.MeasureString($s1, $fontP)
$sz2 = $g.MeasureString($s2, $fontP)
$sz3 = $g.MeasureString($s3, $fontP)
$sp = $g.MeasureString(" ", $fontP)
$tw = $sz1.Width + $sp.Width + $sz2.Width + $sp.Width + $sz3.Width
$tx = ($w - $tw) / 2
$brush1 = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 79, 138, 216))
$g.DrawString($s1, $fontP, $brush1, $tx, $ty)
$tx += $sz1.Width + $sp.Width * 0.35
# "Perfect" — horizontal gradient in word box
$rectP = [System.Drawing.RectangleF]::new($tx, $ty, $sz2.Width, $sz2.Height)
$gb = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
  $rectP,
  [System.Drawing.Color]::FromArgb(255, 232, 121, 169),
  [System.Drawing.Color]::FromArgb(255, 255, 179, 71),
  [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal)
$g.DrawString($s2, $fontP, $gb, $tx, $ty)
$gb.Dispose()
$tx += $sz2.Width + $sp.Width * 0.35
$brush3 = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 46, 184, 122))
$g.DrawString($s3, $fontP, $brush3, $tx, $ty)
$brush1.Dispose()
$brush3.Dispose()
$fontP.Dispose()

# Subtitle
$subY = $ty + 72
$fontSub = [System.Drawing.Font]::new("Segoe UI", 22.0, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$subBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(245, 92, 77, 122))
$sub = "A cozy, creative game where your space becomes a character-filled playground."
$g.DrawString($sub, $fontSub, $subBrush, [System.Drawing.RectangleF]::new(120, $subY, 960, 80), $sfCenter)
$fontSub.Dispose()
$subBrush.Dispose()

# Launch card (rounded, border, offset shadow like landing)
$cardW = 560
$cardH = 118
$cardX = ($w - $cardW) / 2
$cardY = $subY + 92
$rad = 18.0
$shadowPath = New-RoundedRectPath ($cardX + 6) ($cardY + 6) $cardW $cardH $rad
$shadowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 45, 38, 64))
$g.FillPath($shadowBrush, $shadowPath)
$shadowPath.Dispose()
$shadowBrush.Dispose()

$cardPath = New-RoundedRectPath $cardX $cardY $cardW $cardH $rad
$cardRect = [System.Drawing.RectangleF]::new($cardX, $cardY, $cardW, $cardH)
$cardGrad = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
  $cardRect,
  [System.Drawing.Color]::FromArgb(255, 255, 253, 249),
  [System.Drawing.Color]::FromArgb(255, 240, 255, 250),
  [System.Drawing.Drawing2D.LinearGradientMode]::Vertical)
$g.FillPath($cardGrad, $cardPath)
$cardGrad.Dispose()
$cardPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(255, 45, 38, 64), 3)
$g.DrawPath($cardPen, $cardPath)
$cardPath.Dispose()
$cardPen.Dispose()

$fontL = [System.Drawing.Font]::new("Segoe UI", 38.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$l1 = "Launching"; $l2 = "Summer"; $l3 = "2026"
$m1 = $g.MeasureString($l1, $fontL)
$m2 = $g.MeasureString($l2, $fontL)
$m3 = $g.MeasureString($l3, $fontL)
$gap = 14.0
$lw = $m1.Width + $gap + $m2.Width + $gap + $m3.Width
$lx = ($w - $lw) / 2
$ly = $cardY + ($cardH - $m1.Height) / 2 - 2
$b1 = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 185, 28, 140))
$b2 = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 15, 118, 110))
$b3 = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 194, 65, 12))
$g.DrawString($l1, $fontL, $b1, $lx, $ly)
$lx += $m1.Width + $gap
$g.DrawString($l2, $fontL, $b2, $lx, $ly)
$lx += $m2.Width + $gap
$g.DrawString($l3, $fontL, $b3, $lx, $ly)
$b1.Dispose(); $b2.Dispose(); $b3.Dispose()
$fontL.Dispose()

# Small sticker chips (emoji via UTF-32 — avoids script encoding issues)
function U32 { param([int]$cp) return [string][char]::ConvertFromUtf32($cp) }
$eCam = "$(U32 0x1F4F7) $(U32 0x2728)"
$eHome = "$(U32 0x1F3E0) $(U32 0x1F388)"
$eRain = U32 0x1F308
$fontE = [System.Drawing.Font]::new("Segoe UI Emoji", 26.0, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$chipPath1 = New-RoundedRectPath 72 52 108 52 20
$g.FillPath([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(235, 255, 255, 255)), $chipPath1)
$g.DrawPath([System.Drawing.Pen]::new([System.Drawing.Color]::White, 4), $chipPath1)
$g.DrawString($eCam, $fontE, [System.Drawing.Brushes]::Black, 84, 58)
$chipPath1.Dispose()

$chipPath2 = New-RoundedRectPath 1000 72 108 52 20
$g.FillPath([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(235, 255, 255, 255)), $chipPath2)
$g.DrawPath([System.Drawing.Pen]::new([System.Drawing.Color]::White, 4), $chipPath2)
$g.DrawString($eHome, $fontE, [System.Drawing.Brushes]::Black, 1012, 78)
$chipPath2.Dispose()

$chipPath3 = New-RoundedRectPath 1020 480 64 48 18
$g.FillPath([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(235, 255, 255, 255)), $chipPath3)
$g.DrawPath([System.Drawing.Pen]::new([System.Drawing.Color]::White, 4), $chipPath3)
$g.DrawString($eRain, $fontE, [System.Drawing.Brushes]::Black, 1032, 488)
$chipPath3.Dispose()
$fontE.Dispose()

# Sparkle shapes (simple stars as polygons)
function Draw-Star {
  param(
    [System.Drawing.Graphics]$Gg,
    [double]$sx,
    [double]$sy,
    [double]$size,
    [System.Drawing.Color]$col
  )
  $b = [System.Drawing.SolidBrush]::new($col)
  $pts = @(
    [System.Drawing.PointF]::new($sx, $sy - $size),
    [System.Drawing.PointF]::new($sx + $size * 0.22, $sy - $size * 0.28),
    [System.Drawing.PointF]::new($sx + $size, $sy - $size * 0.28),
    [System.Drawing.PointF]::new($sx + $size * 0.35, $sy + $size * 0.1),
    [System.Drawing.PointF]::new($sx + $size * 0.6, $sy + $size * 0.85),
    [System.Drawing.PointF]::new($sx, $sy + $size * 0.35),
    [System.Drawing.PointF]::new($sx - $size * 0.6, $sy + $size * 0.85),
    [System.Drawing.PointF]::new($sx - $size * 0.35, $sy + $size * 0.1),
    [System.Drawing.PointF]::new($sx - $size, $sy - $size * 0.28),
    [System.Drawing.PointF]::new($sx - $size * 0.22, $sy - $size * 0.28)
  )
  $Gg.FillPolygon($b, $pts)
  $b.Dispose()
}
Draw-Star -Gg $g -sx 118 -sy 268 -size 14 -col ([System.Drawing.Color]::FromArgb(230, 245, 166, 35))
Draw-Star -Gg $g -sx 1068 -sy 248 -size 10 -col ([System.Drawing.Color]::FromArgb(200, 155, 126, 245))
Draw-Star -Gg $g -sx 168 -sy 498 -size 12 -col ([System.Drawing.Color]::FromArgb(190, 62, 201, 168))

$sfCenter.Dispose()
$g.Dispose()

$projRoot = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $projRoot "public"
New-Item -ItemType Directory -Force -Path $publicDir | Out-Null
$path = Join-Path $publicDir "og.png"
$bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output ("Wrote $path ({0} bytes)" -f (Get-Item $path).Length)
