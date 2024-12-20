import Swal, { SweetAlertResult, SweetAlertIcon } from "sweetalert2";
import "./Alert.css";

//*------------------------------------------------------------------------

interface ConfirmationProps {
  title: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  icon?: SweetAlertIcon;
}

//*------------------------------------------------------------------------

const ConfirmSwal = ({
  title,
  text,
  confirmButtonText = "ยืนยัน",
  cancelButtonText = "ยกเลิก",
  icon,
}: ConfirmationProps): Promise<SweetAlertResult> => {
  return Swal.fire({
    title: `<span style="color: #CD2525;">${title}</span>`,
    text: text || undefined,
    icon: icon || undefined,
    iconColor: "#FFAD42",
    imageWidth: icon ? undefined : 120,
    imageHeight: icon ? undefined : 120,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
  });
};

export default ConfirmSwal;
