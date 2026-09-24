import sys
import os

try:
    from rembg import remove
    from PIL import Image
except ImportError:
    print("rembg or Pillow not installed")
    sys.exit(1)

input_path = "assets/images/am1.jpeg"
output_path = "assets/images/logo.png"

try:
    input_image = Image.open(input_path)
    # The user said the logo is too pixeled when converted to webp, so perhaps we should ensure high quality
    output_image = remove(input_image)
    output_image.save(output_path, "PNG")
    print(f"Successfully saved to {output_path}")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
