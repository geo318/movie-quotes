const times = {
  days: { en: 'days', ka: 'დღის' },
  hours: { en: 'hours', ka: 'საათის' },
  minutes: { en: 'minutes', ka: 'წუთის' },
  seconds: { en: 'seconds', ka: 'წამების' },
};

export const getTimeElapsed = (time: string, locale: 'en' | 'ka') => {
  const now = new Date();
  const event = new Date(time);
  const t = (
    key: 'getDay' | 'getTime' | 'getHours' | 'getMinutes' | 'getSeconds'
  ) => {
    return now[key]() - event[key]();
  };
  return (
    (t('getDay') && `${t('getDay')} ${times.days[locale]}`) ||
    (t('getHours') && `${t('getHours')} ${times.hours[locale]}`) ||
    (t('getMinutes') && `${t('getMinutes')} ${times.minutes[locale]}`) ||
    (t('getSeconds') && `${times.seconds[locale]}`)
  );
};
