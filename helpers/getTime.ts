const times = {
  days: { en: 'days', ka: 'დღე' },
  hours: { en: 'hours', ka: 'საათი' },
  minutes: { en: 'minutes', ka: 'წუთი' },
  seconds: { en: 'seconds', ka: 'წამების' },
};

export const getTimeElapsed = (time: string, locale: 'en' | 'ka') => {
  const now = new Date();
  const event = new Date(time);
  const t = (key: 'getTime' | 'getHours' | 'getMinutes' | 'getSeconds') => {
    return now[key]() - event[key]();
  };
  return (
    (t('getHours') / 24 >= 1 &&
      `${(t('getHours') / 24).toFixed()} ${times.days[locale]}`) ||
    (t('getHours') && `${t('getHours')} ${times.hours[locale]}`) ||
    (t('getMinutes') && `${t('getMinutes')} ${times.minutes[locale]}`) ||
    (t('getSeconds') && `${times.seconds[locale]}`)
  );
};
