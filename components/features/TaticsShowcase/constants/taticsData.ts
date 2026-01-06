export const FIELD_COORDS = {
  GK:    { x: 250, y: 700 },
  LB:    { x: 70,  y: 530 },
  RB:    { x: 430, y: 530 },
  CB_L:  { x: 180, y: 610 },
  CB_R:  { x: 320, y: 610 },
  DM:    { x: 250, y: 460 },
  CM_L:  { x: 160, y: 400 },
  CM_R:  { x: 340, y: 400 },
  AM:    { x: 250, y: 320 },
  LW:    { x: 100, y: 160 },
  RW:    { x: 400, y: 160 },
  ST:    { x: 250, y: 100 },
  CF_L:  { x: 180, y: 150 },
  CF_R:  { x: 320, y: 150 },
}

export const TACTICAL_SCHEMES = [
  {
    id: "4-3-3",
    label: "4-3-3 Ofensivo",
    slots: [
      { role: "Goleiro", pos: FIELD_COORDS.GK, defaultPlayer: "Hugo Souza" },
      { role: "Lateral Esq", pos: FIELD_COORDS.LB, defaultPlayer: "Matheus Bidu" },
      { role: "Zagueiro Esq", pos: FIELD_COORDS.CB_L, defaultPlayer: "André Ramalho" },
      { role: "Zagueiro Dir", pos: FIELD_COORDS.CB_R, defaultPlayer: "G. Henrique" },
      { role: "Lateral Dir", pos: FIELD_COORDS.RB, defaultPlayer: "Matheuzinho" },
      { role: "Volante", pos: FIELD_COORDS.CM_L, defaultPlayer: "José Martínez" },
      { role: "Volante 2", pos: FIELD_COORDS.CM_R, defaultPlayer: "Breno Bidon" },
      { role: "Meia", pos: FIELD_COORDS.AM, defaultPlayer: "Rodrigo Garro" },
      { role: "Ponta Esq", pos: FIELD_COORDS.LW, defaultPlayer: "Yuri Alberto" },
      { role: "Ponta Dir", pos: FIELD_COORDS.RW, defaultPlayer: "André Carrillo" },
      { role: "Centroavante", pos: FIELD_COORDS.ST, defaultPlayer: "Memphis Depay" },
    ],
    metrics: [
        {
            title: 'Familiarity',
            value: 90
        },
        {
            title: 'Intensity',
            value: 90
        },
        {
            title: 'Response',
            value: 90
        },
    ]
  },
  {
    id: "4-4-2-diamond",
    label: "4-4-2 Losango",
    slots: [
      { role: "Goleiro", pos: FIELD_COORDS.GK, defaultPlayer: "Hugo Souza" },
      { role: "Lateral Esq", pos: FIELD_COORDS.LB, defaultPlayer: "Matheus Bidu" },
      { role: "Zagueiro Esq", pos: FIELD_COORDS.CB_L, defaultPlayer: "André Ramalho" },
      { role: "Zagueiro Dir", pos: FIELD_COORDS.CB_R, defaultPlayer: "G. Henrique" },
      { role: "Lateral Dir", pos: FIELD_COORDS.RB, defaultPlayer: "Matheuzinho" },
      { role: "Primeiro Volante", pos: FIELD_COORDS.DM, defaultPlayer: "José Martínez" },
      { role: "Meia Esq", pos: FIELD_COORDS.CM_L, defaultPlayer: "Breno Bidon" },
      { role: "Meia Dir", pos: FIELD_COORDS.CM_R, defaultPlayer: "André Carrillo" },
      { role: "Meia Armador", pos: FIELD_COORDS.AM, defaultPlayer: "Rodrigo Garro" },
      { role: "Atacante 1", pos: FIELD_COORDS.CF_L, defaultPlayer: "Yuri Alberto" },
      { role: "Atacante 2", pos: FIELD_COORDS.CF_R, defaultPlayer: "Memphis Depay" },
    ],
    metrics: [
        {
            title: 'Familiarity',
            value: 90
        },
        {
            title: 'Intensity',
            value: 90
        },
        {
            title: 'Response',
            value: 90
        },
    ]
  }
]