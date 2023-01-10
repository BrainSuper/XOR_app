
export const checkInput = (callback, resultArr, operation, firstInput, secondInput) => {
    callback(resultArr.map((resInp, i) => {
        if (operation === 'AND') {
            if (firstInput[i].status === secondInput[i].status) {
                console.log('same')
                return {...resInp, status: firstInput[i].status}
            } else if (firstInput[i].status !== secondInput[i].status) {
                return {...resInp, status: false}
            }
        } else if (operation === 'OR') {
            if (firstInput[i].status === secondInput[i].status) {
                return {...resInp, status: firstInput[i].status}
            } else if (firstInput[i].status !== secondInput[i].status) {
                return {...resInp, status: true}
            }
        } else if (operation === 'XOR') {
            if (firstInput[i].status && firstInput[i].status === secondInput[i].status) {
                return {...resInp, status: !firstInput[i].status}
            } else if (!firstInput[i].status && firstInput[i].status === secondInput[i].status) {
                return {...resInp, status: firstInput[i].status}
            } else if (firstInput[i].status !== secondInput[i].status) {
                return {...resInp, status: true}
            }
        } else if (operation === 'NOT') {
                return {...resInp, status: !firstInput[i].status}

        }
    }))
}