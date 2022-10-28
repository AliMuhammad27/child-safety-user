import Swal from "sweetalert2";
const Error = (message) =>
  Swal.fire({
    icon: "error",
    title: "Error",
    text: `${message ? message : "Not Completed"}`,
    showConfirmButton: false,
    timer: 3000,
  });

export default Error;
