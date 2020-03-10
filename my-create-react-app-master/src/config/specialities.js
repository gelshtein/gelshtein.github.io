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
    min_score:  195.33,
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
      [phythics,in_lang] // [] here means ist_ukr or math
    ]
  },
  {
    speciality: 'Міжнародне право',
    min_score:   197.064,
    matters: [
      ukr_lang,
      in_lang,
      [ist_ukr, math]
    ]
  },
  {
    speciality: 'Соціальне забезпечення',
    min_score:   176.46,
    matters: [
      ukr_lang,
      ist_ukr,
      [geograpthy, math]
    ]
  },
  {
    speciality: 'Міжнародні економічні відносини',
    min_score:   194.004,
    matters: [
      ukr_lang,
      in_lang,
      [math, geograpthy]
    ]
  },
  {
    speciality: 'Журналістика',
    min_score:   192.066,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang, math]
    ]
  },
  {
    speciality:        'Туризм',
    min_score:          181.458,
    matters: [
      ukr_lang,
      in_lang,
      [math, geograpthy]
    ]
  },
  {
    speciality:        'Економіка',
    min_score:          181.968,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality: 'Публічне управління та адміністрування',
    min_score:   184.314,
    matters: [
      ukr_lang,
      math,
      [in_lang, ist_ukr]
    ]
  },
  {
    speciality: 'Право',
    min_score:   183.702,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,math]
    ]
  },
  {
    speciality: 'Філологія',
    min_score:   190.638,
    matters: [
      ukr_lang,
      in_lang,
      [ist_ukr, geograpthy]
    ]
  },
  {
    speciality: 'Маркетинг',
    min_score:   178.398,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality:        'Підприємництво, торгівля та біржова діяльність',
    min_score:          178.908,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality:        'Фінанси, банківська справа та страхування',
    min_score:          177.072,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality:        'Менеджмент',
    min_score:          177.684,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },
  {
    speciality: 'Психологія',
    min_score:   172.89,
    matters: [
      ukr_lang,
      math,
      [biology, in_lang]
    ]
  },
  {
    speciality: 'Історія та археологія',
    min_score:   185.13,
    matters: [
      ukr_lang,
      ist_ukr,
      [geograpthy, in_lang]
    ]
  },
  {
    speciality: 'Комп’ютерні науки',
    min_score:   171.36,
    matters: [
      ukr_lang,
      math,
      [in_lang, phythics]
    ]
  },
  {
    speciality: 'Кібербезпека',
    min_score:   175.226,
    matters: [
      ukr_lang,
      math,
      [in_lang, phythics]
    ]
  },
  {
    speciality:        'Облік і оподаткування',
    min_score:          176.97,
    matters: [
      ukr_lang,
      math,
      [in_lang, geograpthy]
    ]
  },

  {
    speciality: 'Готельно-ресторанна справа',
    min_score:   180.642,
    matters: [
      ukr_lang,
      in_lang,
      [math, geograpthy]
    ]
  },
  {
    speciality:                         'Транспортні технології',
    min_score:                           136.068,
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
      math,
      [in_lang,ist_ukr]
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
    min_score:   176.46,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
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
    min_score:   183.702,
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
      [math,ist_ukr]
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
    min_score:          178.908,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality:        'Фінанси, банківська справа та страхування(виключно контракт)',
    min_score:          177.072,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality:        'Менеджмент(виключно контракт)',
    min_score:          177.684,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality: 'Психологія(виключно контракт)',
    min_score:   172.89,
    matters: [
      ukr_lang,
      ist_ukr,
      [biology,in_lang]
    ]
  },
  {
    speciality: 'Історія та археологія(виключно контракт)',
    min_score:   185.13,
    matters: [
      ukr_lang,
      ist_ukr,
      [math,geograpthy]
    ]
  },
  {
    speciality: 'Комп’ютерні науки(виключно контракт)',
    min_score:   171.36,
    matters: [
      ukr_lang,
      math,
      [ist_ukr, in_lang]
    ]
  },
  {
    speciality: 'Кібербезпека(виключно контракт)',
    min_score:   175.226,
    matters: [
      ukr_lang,
      math,
      [ist_ukr, in_lang]
    ]
  },
  {
    speciality:        'Облік і оподаткування(виключно контракт)',
    min_score:          176.97,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },


  {
    speciality: 'Готельно-ресторанна справа(виключно контракт)',
    min_score:   180.642,
    matters: [
      ukr_lang,
      ist_ukr,
      [in_lang,geograpthy]
    ]
  },
  {
    speciality:                         'Транспортні технології(виключно контракт)',
    min_score:                           136.068,
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
