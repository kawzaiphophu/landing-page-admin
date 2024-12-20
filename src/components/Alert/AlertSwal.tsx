import Swal, { SweetAlertIcon } from "sweetalert2";

//*------------------------------------------------------------------------

interface IAlertSwal {
  title?: string;
  text?: string;
  icon?: SweetAlertIcon;
  timer?: number;
  showConfirmButton?: boolean;
}

//*------------------------------------------------------------------------

const AlertSwal = ({
  title = "SUCCESS",
  text = "",
  icon = "success",
  timer = 3000,
  showConfirmButton = false,
}: IAlertSwal): void => {
  Swal.fire({
    title: `<span style="color:${
      icon === "success" ? "#1EC02F;" : "#CD2525;"
    } ">${title}</span>`,
    text,
    icon,
    timer,
    showConfirmButton: showConfirmButton,
    confirmButtonText: "รับทราบ",
  });
};

export default AlertSwal;
