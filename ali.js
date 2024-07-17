var prefix;

if (symbol === "$") {
  prefix = currencyPrefix;
} else if (symbol === "#" && /[boxX]/.test(type)) {
  prefix = "0" + type.toLowerCase();
} else {
  prefix = "";
}
