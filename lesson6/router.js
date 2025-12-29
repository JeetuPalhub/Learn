const upload = require("")

router.post("/", protect, upload.single("image", createProduct));
