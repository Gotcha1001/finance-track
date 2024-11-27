export const Currencies = [
  { value: "USD", label: "$ Dollar", symbol: "$", locale: "en-US" },
  { value: "EUR", label: "€ Euro", symbol: "€", locale: "de-DE" },
  { value: "JPY", label: "¥ Yen", symbol: "¥", locale: "ja-JP" },
  { value: "GBP", label: "£ Pound", symbol: "£", locale: "en-GB" },
  { value: "AUD", label: "$ Australian Dollar", symbol: "A$", locale: "en-AU" },
  { value: "CAD", label: "$ Canadian Dollar", symbol: "C$", locale: "en-CA" },
  { value: "CHF", label: "₣ Swiss Franc", symbol: "₣", locale: "de-CH" },
  { value: "CNY", label: "¥ Chinese Yuan", symbol: "¥", locale: "zh-CN" },
  { value: "INR", label: "₹ Indian Rupee", symbol: "₹", locale: "en-IN" },
  { value: "RUB", label: "₽ Russian Ruble", symbol: "₽", locale: "ru-RU" },
  { value: "ZAR", label: "R South African Rand", symbol: "R", locale: "en-ZA" },
  { value: "BRL", label: "R$ Brazilian Real", symbol: "R$", locale: "pt-BR" },
  { value: "SGD", label: "$ Singapore Dollar", symbol: "S$", locale: "en-SG" },
  { value: "KRW", label: "₩ South Korean Won", symbol: "₩", locale: "ko-KR" },
  { value: "MXN", label: "$ Mexican Peso", symbol: "MX$", locale: "es-MX" },
];

export type Currency = (typeof Currencies)[0];
