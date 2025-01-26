export const TYPE = [
  {
    name: "สินค้าและบริการ",
    value: "HARDWARE_IMPLEMENTATION",
  },
  {
    name: "สินค้า",
    value: "HARDWARE",
  },
  {
    name: "ติดตั้ง",
    value: "IMPLEMENTATION",
  },
  {
    name: "การบำรุงรักษา",
    value: "MAINTENANCE",
  },
  {
    name: "การให้คำปรึกษา",
    value: "CONSULT",
  },
];

export const STATUS = [
  {
    name: "สั่งซื้อสินค้า / บริการ",
    value: "ORDERED",
  },
  {
    name: "ส่งสินค้าเรียบร้อย",
    value: "DELIVERED",
  },
  {
    name: "ติดตั้งเรียบร้อย",
    value: "INSTALLED",
  },
  {
    name: "ส่งมอบงานเรียบร้อยแต่ยังรับเงินไม่ครบ",
    value: "PARTIAL_PAYMENT",
  },
  {
    name: "ส่งมอบงานและเก็บเงินเรียบร้อย",
    value: "FULL_PAYMENT",
  },
  {
    name: "อื่นๆ ระบุ",
    value: "OTHER",
  },
];

export const ROLE = [
  {
    name: "ฝ่ายขาย",
    value: "SALE",
  },
  {
    name: "ผู้จัดการโครงการ",
    value: "PROJECT_MANAGER",
  },
  {
    name: "แอดมิน",
    value: "ADMIN",
  },
];