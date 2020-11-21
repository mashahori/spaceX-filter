export const fromSecToDuration = duration => {
  const min = parseInt(duration / 60);
  let sec = parseInt(duration % 60);

  if (sec < 10) {
    sec = '0' + sec;
  }

  return `${min}:${sec}`;
};


export const getNewTags = (arr, slug) => {
  if (!arr) {
    return [slug];
  }
  if (arr === slug) {
    return '';
  }
  if (Array.isArray(arr)) {
    if (arr.includes(slug)) {
      return arr.filter(i => i && i.length > 0 && i !== slug);
    }
    return [...arr, slug].filter(i => i && i.length > 0);
  }
  if (arr.length > 0) {
    return [arr, slug];
  }
  return '';
};

export const restOfDuration = duration => {
  const time = duration - 1;
  return time;
};
