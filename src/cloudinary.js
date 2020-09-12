const sha1 = require("js-sha1");

export function storeImage(request, inputFile, callback) {
  if (inputFile.length == 0) {
    callback("null");
    return;
  }

  let reader = new FileReader();
  reader.addEventListener("load", () => {
    const date = new Date()
      .toISOString()
      .replace(/[^0-9]/g, "")
      .slice(0, -3);
    let formData = new FormData();
    formData.append("upload_preset", "Musical_App_Cloudinary");
    formData.append("file", reader.result);
    formData.append("public_id", `${date}`);
    request(
      "POST",
      `https://api.cloudinary.com/v1_1/dqzpiqo2q/image/upload`,
      {},
      formData,
      () => true,
      "Image sauvegardée !",
      () => {
        callback(date);
      },
      "Une erreur est survenue !",
      (error) => {
        console.log(error);
      }
    );
  });
  reader.readAsDataURL(inputFile[0]);
}

export function deleteImage(request, id, callback) {
  if (!id) {
    callback();
    return;
  }

  const timestamp = Date.now();
  const public_id = "Musical_App_Cloudinary/" + id;

  request(
    "POST",
    `https://api.cloudinary.com/v1_1/dqzpiqo2q/image/destroy`,
    {
      api_key: "787883953883479",
      timestamp: timestamp,
      public_id: public_id,
      invalidate: true,
      signature: sha1(
        "invalidate=true&public_id=" +
          public_id +
          "&timestamp=" +
          timestamp +
          "j7qoVPHLHsEzVLwO0KszufFrM6E"
      ),
    },
    {},
    () => true,
    "Image supprimée !",
    () => {
      callback();
    },
    "Une erreur est survenue !",
    (error) => {
      console.log(error);
    }
  );
}

export function replaceImage(request, initialId, inputFile, callback) {
  if (!initialId || !inputFile || inputFile.length == 0) {
    storeImage(request, inputFile, callback);
    return;
  }

  deleteImage(request, initialId, () => {
    storeImage(request, inputFile, callback);
  });
}

export function openImage(id) {
  if (id)
    window.open(
      `http://res.cloudinary.com/dqzpiqo2q/image/upload/v1597937619/Musical_App_Cloudinary/${id}`
    );
}
