const ukr_lang = 'Укр. мова та література'
const ist_ukr = 'Історія України'
const math = 'Математика'
const in_lang = 'Іноземна мова'
const biology = 'Біологія'
const geograpthy = 'Географія'
const phythics = 'Фізика'



export const allSubjects = [
  ukr_lang,
  ist_ukr,
  math,
  in_lang,
  biology,
  geograpthy,
  phythics,
]

export const config = [
  {
    speciality: 'Міжнародні відносини, суспільні комунікації та регіональні студії',
    min_score:  192.31,
    matters:    [
      ukr_lang,
      in_lang,
      [ist_ukr, math] // [] here means ist_ukr or math
    ]
  },
  {
    speciality: 'Інженерія програмного забезпечення',
    min_score:  0,
    matters:    [
      ukr_lang,
      math,
      phythics // [] here means ist_ukr or math
    ]
  },
  {
    speciality: 'Міжнародне право',
    min_score:   195.54,
    matters: [
      ukr_lang,
      in_lang,
      [ist_ukr, math]
    ]
  },
  {
    speciality: 'Соціальне забезпечення',
    min_score:   0,
    matters: [
      ukr_lang,
      ist_ukr,
      [geograpthy, math]
    ]
  },
  {
    speciality: 'Міжнародні економічні відносини',
    min_score:   191.00,
    matters: [
      ukr_lang,
      in_lang,
      [math, geograpthy]
    ]
  },
  {
    speciality: 'Журналістика',
    min_score:   187.32,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang, math]
    ]
  },
  {
    speciality:        'Туризм',
    min_score:          180.03,
    matters: [
      ukr_lang,
      in_lang,
      [math, geograpthy]
    ]
  },
  {
    speciality:        'Економіка',
    min_score:          185.33,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality: 'Публічне управління та адміністрування',
    min_score:   188.00,
    matters: [
      ukr_lang,
      math,
      [in_lang, ist_ukr]
    ]
  },
  {
    speciality: 'Право',
    min_score:   175.85,
    matters: [
      ukr_lang,
      ist_ukr,
      in_lang
    ]
  },
  {
    speciality: 'Філологія',
    min_score:   187.68,
    matters: [
      ukr_lang,
      in_lang,
      [ist_ukr, geograpthy]
    ]
  },
  {
    speciality: 'Маркетинг',
    min_score:   177.48,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality:        'Підприємництво, торгівля та біржова діяльність',
    min_score:          172.28,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality:        'Фінанси, банківська справа та страхування',
    min_score:          174.42,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality:        'Менеджмент',
    min_score:          177.48,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality: 'Психологія',
    min_score:   168.01,
    matters: [
      ukr_lang,
      biology,
      [math, in_lang]
    ]
  },
  {
    speciality: 'Історія та археологія',
    min_score:   0,
    matters: [
      ukr_lang,
      ist_ukr,
      [geograpthy, in_lang]
    ]
  },
  {
    speciality: 'Комп’ютерні науки',
    min_score:   163.61,
    matters: [
      ukr_lang,
      math,
      [in_lang, phythics]
    ]
  },
  {
    speciality: 'Кібербезпека',
    min_score:   166.36,
    matters: [
      ukr_lang,
      math,
      [in_lang, phythics]
    ]
  },
  {
    speciality:        'Облік і оподаткування',
    min_score:          170.54,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality:        'Соціальне забезпечення',
    min_score:          150.86,
    matters: [
      ukr_lang,
      in_lang,
      [ist_ukr, geograpthy]
    ]
  },
  {
    speciality: 'Прикладна математика',
    min_score:   178.31,
    matters: [
      ukr_lang,
      math,
      [in_lang, phythics]
    ]
  },
  {
    speciality: 'Готельно-ресторанна справа',
    min_score:   0,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality:                         'Транспортні технології',
    min_score:                           135.09,
    algo:                                'transport_algo',
    show_preuniversity_training_courses: true,
    matters: [
      ukr_lang,
      math,
      [in_lang, phythics]
    ]
  },

  {
    speciality: 'Міжнародні відносини, суспільні комунікації та регіональні студії(виключно контракт)',
    min_score:  192.31,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality: 'Інженерія програмного забезпечення(виключно контракт)',
    min_score:  0,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,math]
    ]
  },
  {
    speciality: 'Міжнародне право(виключно контракт)',
    min_score:   195.54,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality: 'Соціальне забезпечення(виключно контракт)',
    min_score:   0,
    matters: [
      ukr_lang,
      ist_ukr,
      in_lang
    ]
  },
  {
    speciality: 'Міжнародні економічні відносини(виключно контракт)',
    min_score:   191.00,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality: 'Журналістика(виключно контракт)',
    min_score:   187.32,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality:        'Туризм(виключно контракт)',
    min_score:          180.03,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality:        'Економіка(виключно контракт)',
    min_score:          185.33,
    //excluding_contract: true,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality: 'Публічне управління та адміністрування(виключно контракт)',
    min_score:   188.00,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality: 'Право(виключно контракт)',
    min_score:   175.85,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality: 'Філологія(виключно контракт)',
    min_score:   187.68,
    matters: [
      ukr_lang,
      in_lang,
      math
    ]
  },
  {
    speciality: 'Маркетинг(виключно контракт)',
    min_score:   177.48,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality:        'Підприємництво, торгівля та біржова діяльність(виключно контракт)',
    min_score:          172.28,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality:        'Фінанси, банківська справа та страхування(виключно контракт)',
    min_score:          174.42,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality:        'Менеджмент(виключно контракт)',
    min_score:          177.48,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality: 'Психологія(виключно контракт)',
    min_score:   168.01,
    matters: [
      ukr_lang,
      ist_ukr,
      biology
    ]
  },
  {
    speciality: 'Історія та археологія(виключно контракт)',
    min_score:   0,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality: 'Комп’ютерні науки(виключно контракт)',
    min_score:   163.61,
    matters: [
      ukr_lang,
      math,
      [ist_ukr, in_lang]
    ]
  },
  {
    speciality: 'Кібербезпека(виключно контракт)',
    min_score:   166.36,
    matters: [
      ukr_lang,
      math,
      [ist_ukr, in_lang]
    ]
  },
  {
    speciality:        'Облік і оподаткування(виключно контракт)',
    min_score:          170.54,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality:        'Соціальне забезпечення(виключно контракт)',
    min_score:          150.86,
    matters: [
      ukr_lang,
      in_lang,
      [ist_ukr, geograpthy]
    ]
  },
  {
    speciality: 'Прикладна математика(виключно контракт)',
    min_score:   178.31,
    matters: [
      ukr_lang,
      math,
      [ist_ukr, in_lang]
    ]
  },
  {
    speciality: 'Готельно-ресторанна справа(виключно контракт)',
    min_score:   0,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality:                         'Транспортні технології(виключно контракт)',
    min_score:                           135.09,
    algo:                                'transport_algo',
    show_preuniversity_training_courses: true,
    matters: [
      ukr_lang,
      math,
      [ist_ukr, in_lang]
    ]
  },
  {
    speciality:                         'Правоохоронна діяльність(виключно контракт)',
    min_score:                           135.09,
    algo:                                'transport_algo',
    show_preuniversity_training_courses: true,
    matters: [
      ukr_lang,
      ist_ukr,

    ]
  },

]
