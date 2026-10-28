# Media folder

Drop image files (`.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif`) into one
of the two category folders and they'll automatically show up in the Media
section of the site — no code changes needed.

- `volunteering/` — shown under the **Volunteering** heading.
- `other/` — shown under the **Other** heading.

Images left directly in this folder (not in a subfolder) are shown under
**Other**. A heading is hidden when its folder has no images.

- **Caption**: taken from the filename. `robot-arm-demo.jpg` becomes
  "Robot Arm Demo". Rename the file to change the caption.
- **Order**: images are sorted by filename, so prefix with numbers
  (`01-lab.jpg`, `02-workshop.jpg`) if you want to control the order.
- **Dev server**: while `npm run dev` is running, new images appear
  automatically (the browser refreshes on its own). For the live/production
  build, run `npm run build` again after adding images.

This file itself is ignored (only image files are picked up).
