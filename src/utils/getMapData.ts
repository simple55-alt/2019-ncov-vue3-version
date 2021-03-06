// 将数据格式化为地图所需格式
export function getMapData(staticList: []) {
  const mapList = [] as any
  staticList.forEach((item: any) => {

    const mapItem = {
      name: item.provinceShortName,
      value: item.confirmedCount,
      ...item
    }
    mapList.push(mapItem)
  })
  return mapList
}
// 将数据格式化为地图所需格式
export function getMapProvinceData(staticList: [], provinceName: string) {
  const mapList = [] as any
  if (provinceName.includes('省') || provinceName.includes('自治区')) {
    staticList.forEach((item: any) => {
      const mapItem = {
        name: item.cityName + '市',
        value: item.confirmedCount,
        ...item
      }
      mapList.push(mapItem)
    })
  } else {
    staticList.forEach((item: any) => {
      const mapItem = {
        name: item.cityName,
        value: item.confirmedCount,
        ...item
      }
      mapList.push(mapItem)
    })
  }
  return mapList
}
