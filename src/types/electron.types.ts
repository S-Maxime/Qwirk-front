interface IScaling {
  splashScreen: {
    width: number
    height: number
  }
  app: {
    x: number
    y: number
  }
  dividedBy: number
}

interface IBounds {
  splashScreen: {
    x: number
    y: number
  }
  app: {
    x: number
    y: number
  }
}

export { IScaling, IBounds }
