export { };

interface Covid19InfectionInfo {
  name: string,
  case: number
}

const Covid19Japan: Record<string, Covid19InfectionInfo> = {
  Tokyo: { name: '東京', case: 2000 },
  Osaka: { name: '大阪', case: 1000 },
  Fukuoka: { name: '福岡', case: 200 },
}
