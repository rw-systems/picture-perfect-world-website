Add-Type -AssemblyName System.Drawing
$w = 1200
$h = 630
$bmp = New-Object System.Drawing.Bitmap $w, $h
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = "AntiAlias"
$g.Clear([System.Drawing.Color]::FromArgb(255, 255, 248, 243))
$p1 = New-Object System.Drawing.Point 0, 0
$p2 = New-Object System.Drawing.Point $w, $h
$c1 = [System.Drawing.Color]::FromArgb(255, 255, 232, 244)
$c2 = [System.Drawing.Color]::FromArgb(255, 212, 244, 234)
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $p1, $p2, $c1, $c2
$g.FillRectangle($brush, 0, 0, $w, $h)
$card = New-Object System.Drawing.Rectangle 100, 80, 1000, 470
$g.FillRectangle([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(250, 255, 253, 249)), $card)
$g.DrawRectangle([System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(255, 45, 38, 64), 5), $card)
$font = [System.Drawing.Font]::new("Segoe UI", 52.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$font2 = [System.Drawing.Font]::new("Segoe UI", 34.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$font3 = [System.Drawing.Font]::new("Segoe UI", 22.0, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$fmt = New-Object System.Drawing.StringFormat
$fmt.Alignment = "Center"
$g.DrawString("PicturePerfectWorld", $font, [System.Drawing.Brushes]::SlateGray, [System.Drawing.RectangleF]::new(100, 160, 1000, 70), $fmt)
$g.DrawString("Launching Summer 2026", $font2, [System.Drawing.Brushes]::DarkSlateBlue, [System.Drawing.RectangleF]::new(100, 250, 1000, 55), $fmt)
$g.DrawString("Playful worlds from real rooms", $font3, [System.Drawing.Brushes]::DimGray, [System.Drawing.RectangleF]::new(100, 330, 1000, 40), $fmt)
$projRoot = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $projRoot "public"
New-Item -ItemType Directory -Force -Path $publicDir | Out-Null
$path = Join-Path $publicDir "og.png"
$bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
Write-Output "Wrote $path ($( (Get-Item $path).Length ) bytes)"
