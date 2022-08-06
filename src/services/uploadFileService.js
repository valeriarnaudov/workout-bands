import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { storage } from "../firebase";

export const uploadFile = (file, setPer, setData) => {
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setPer(progress);
            switch (snapshot.state) {
                case "paused":
                    toast.info("Upload is paused");
                    break;
                case "running":
                    console.log("Upload is running");
                    break;
                default:
                    break;
            }
        },
        (error) => {
            toast.error("Error on uploading file");
        },
        () => {
            toast.success("Upload completed!");
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setData((prev) => ({ ...prev, img: url }));
            });
        }
    );
};
