function solve(worker) {
    const dizziness = worker.dizziness;

    if(dizziness === true) {
        worker.levelOfHydrated += (worker.weight * worker.experience) / 10;
        worker.dizziness = false;
    }

    return worker;
}

console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));