abstract class Classifier {
  data: string

  constructor(data: string) {
    this.data = data
  }

  evaluate() {
    console.log(`${this.result()} using "${this.data}"`)
  }

  abstract result(): void
}

class StatisticalClassifier extends Classifier {
  result(): string {
    return "Statistical classification"
  }
}

class EnsembleClassifier extends Classifier {
  result(): string {
    return "Ensemble classification"
  }
}

const statistical = new StatisticalClassifier("Hello")
const ensemble = new EnsembleClassifier("World")

statistical.evaluate()
ensemble.evaluate()
