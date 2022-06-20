const getParamString = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = location.search.substring(1).match(reg); // 匹配目标参数
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}

export {
  getParamString
}
