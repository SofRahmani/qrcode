export const removeHashtag = (data: string) => {
  return data.replace(/#/g, '');
}