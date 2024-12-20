import { getDistrictNameByCode, getProvinceNameByCode, getSubdistrictNameByCode } from "./app";

const formatSinglePhoneNumber = (phoneNumber: string): string => {
  if (!phoneNumber) return "-";

  const cleaned = phoneNumber.replace(/\D/g, "");

  let formattedNumber;
  if (cleaned.length === 10) {
    formattedNumber = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  } else if (cleaned.length === 11 && cleaned.startsWith("1")) {
    formattedNumber = cleaned.replace(
      /(\d{1})(\d{3})(\d{3})(\d{4})/,
      "$1-$2-$3-$4"
    );
  } else if (cleaned.length === 9) {
    formattedNumber = cleaned.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
  } else {
    formattedNumber = cleaned;
  }

  return formattedNumber;
};

export const formatPhoneNumber = (
  phoneNumber: string | string[]
): string | string[] => {
  if (Array.isArray(phoneNumber)) {
    return phoneNumber.map(formatSinglePhoneNumber);
  } else if (typeof phoneNumber === "string") {
    if (phoneNumber.includes(",")) {
      return phoneNumber
        .split(",")
        .map((num) => formatSinglePhoneNumber(num.trim()));
    } else {
      return formatSinglePhoneNumber(phoneNumber);
    }
  }
  return phoneNumber;
};

export const formatDate = (dateString: string | Date) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDateWithTime = (dateString: string | Date) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const formatTime = (value: Date) => {
  if (!value) return "-";
  const date = new Date(value);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const formatPrice = (
  value: number | string,
  fixed: number = 2
): string => {
  if (!value) {
    return "0";
  }
  const NumValue = Number(value);
  const integerPart = Math.floor(NumValue);
  let decimalPart = (NumValue - integerPart).toFixed(fixed).slice(2);

  if (fixed === 0) {
    decimalPart = "";
  }

  const integerWithCommas = integerPart
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (fixed === 0) {
    return `${integerWithCommas}`;
  } else {
    return `${integerWithCommas}.${decimalPart}`;
  }
};

export const extractPlainText = (htmlString?: string): string => {
  if (typeof htmlString !== "string") {
    return "";
  }
  const regex = /<[^>]*>/g;
  const plainText = htmlString.replace(regex, "");
  return plainText.trim();
};

export const getAddress = (data: { 
  address: string, 
  subDistrict: string, 
  district: string, 
  province: string, 
  zipcode: string, 
  country: string 
}) => {
  const getValueOrDash = (value: any) => value || '';

  return `${getValueOrDash(data.address)} ${getValueOrDash(getSubdistrictNameByCode(data.subDistrict))} ${getValueOrDash(getDistrictNameByCode(data.district))} ${getValueOrDash(getProvinceNameByCode(data.province))} ${getValueOrDash(data.zipcode)} ${getValueOrDash(data.country)}`;
};