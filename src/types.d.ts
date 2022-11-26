export interface User {
  body: {
    _id: string
    name: string
    username: string
    email: string
    puntos: number
    imagen: string
    pronosticos: Array<string>
  }
}
export interface UserRecovery {
  body: {
    _id: string
    name: string
    username: string
    email: string
    puntos: number
    password: string
    imagen: string
    pronosticos: Array<string>
  }
}

export interface Equipo {
  body: {
    nombre: string
    imagen: string
  }
}

export interface Partido {
  body: {
    _id: number
    equipoLocal: Equipo['body']
    equipoVisita: Equipo['body']
    golesLocal: number
    golesVisita: number
    status: boolean
    isPlaying: boolean
    isFinish: boolean
    date?: string
  }
}

export interface Pronostico {
  body: {
    _id: string
    idUser: number
    idPartido: number
    usuario: string
    partido: Partido['body']
    golesLocal: number
    golesVisita: number
  }
}
