//存储所有effect对象 是一个set（避免重复）
export function createDep(effects?){
    const dep = new Set(effects);
    return dep;
}
