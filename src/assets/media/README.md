# Media folder

Drop image files here (`.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif`) and
they'll automatically show up in the Media section of the site — no code
changes needed.

- **Caption**: taken from the filename. `robot-arm-demo.jpg` becomes
  "Robot Arm Demo". Rename the file to change the caption.
- **Order**: images are sorted by filename, so prefix with numbers
  (`01-lab.jpg`, `02-workshop.jpg`) if you want to control the order.
- **Dev server**: while `npm run dev` is running, new images appear
  automatically (the browser refreshes on its own). For the live/production
  build, run `npm run build` again after adding images.

This file itself is ignored (only image files are picked up).
