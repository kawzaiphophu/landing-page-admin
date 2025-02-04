import districts from "@/assets/districts.json";
import provinces from "@/assets/provinces.json";
import subDistricts from "@/assets/subDistricts.json";
import { ROLE } from "@/constants/app";

export function hexToRgba(hex: string, opacity: number): string {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function capitalizeFirstChar(str: any): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Get Districts by Province Code
export const getDistrictCodesByProvinceCode = (
  provinceCode: string
): string[] => {
  return districts
    .filter((district) => district.provinceCode === provinceCode)
    .map((district) => district.districtCode);
};

// Get Subdistricts by District Code
export const getSubdistrictCodesByDistrictCode = (
  districtCode: string
): string[] => {
  return subDistricts
    .filter((subdistrict) => subdistrict.districtCode === districtCode)
    .map((subdistrict) => subdistrict.subDistrictCode);
};

// Get Province Name by Province Code
export const getProvinceNameByCode = (provinceCode: string) => {
  const province = provinces.find(
    (province) => province.provinceCode === provinceCode
  );
  return province ? province.provinceName : null;
};

// Get District Name by District Code
export const getDistrictNameByCode = (districtCode: string) => {
  const district = districts.find(
    (district) => district.districtCode === districtCode
  );
  return district ? district.districtName : null;
};

// Get Subdistrict Name by Subdistrict Code
export const getSubdistrictNameByCode = (subdistrictCode: string) => {
  const subdistrict = subDistricts.find(
    (subdistrict) => subdistrict.subDistrictCode === subdistrictCode
  );
  return subdistrict ? subdistrict.subDistrictName : null;
};

// utils/enumUtils.ts
export function enumToOptions<T extends Record<string, string>>(
  enumObj: T
): string[] {
  return Object.entries(enumObj).map(([value]) => value);
}

export function setErrObject(form: any, initialErrorState: any) {
  const errorsObject: any = { ...initialErrorState };

  const recursiveSetErrors = (currentFormObj: any, currentErrorState: any) => {
    Object.keys(currentErrorState).forEach((key) => {
      if (currentFormObj && key in currentFormObj) {
        const value = currentFormObj[key];

        const isFalsyValue =
          value === "" ||
          value === null ||
          value === undefined ||
          value === 0 ||
          value === "0.00" ||
          (Array.isArray(value) && value.length === 0);

        if (Array.isArray(value)) {
          currentErrorState[key] = value.map((item: any, index: number) => {
            const arrayErrorState = currentErrorState[key][index] || true;
            return recursiveSetErrors(item, arrayErrorState);
          });
        } else if (typeof value === "object" && value !== null) {
          currentErrorState[key] = recursiveSetErrors(
            value,
            currentErrorState[key] || false
          );
        } else {
          currentErrorState[key] = isFalsyValue;
        }
      } else {
        delete currentErrorState[key];
      }
    });

    return currentErrorState;
  };

  return recursiveSetErrors(form, errorsObject);
}

export function getRole() {
  if (typeof window === "undefined") {
    return { isAdmin: false, isSale: false, isPM: false };
  }

  const role = localStorage.getItem("role");

  
  const isAdmin = role === "ADMIN";
  const isSale = role === "SALE";
  const isPM = role === "PROJECT_MANAGER";

  return { isAdmin, isSale, isPM };
}