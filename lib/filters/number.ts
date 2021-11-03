export const number = (number: number | string, locale: string, options: Intl.NumberFormatOptions): string => {
  if (typeof number === 'undefined') throw new TypeError('[FilterNumber] The `number` attribute is required.')
  if (typeof locale === 'undefined') throw new TypeError('[FilterNumber] The `locale` attribute is required.')
  if (typeof locale !== 'string') throw new TypeError('[FilterNumber] The `locale` attribute must be a string.')

  try {
    return new Intl.NumberFormat(locale, options).format(Number(number))
  } catch (error: any) {
    throw new Error(`[FilterNumber] ${error}`)
  }
}
