const service = (count, index, name, direction) => {
  try {
    if (count < 1 && count < 500) {
      throw new Error('재료의 수는 1~500개입니다.')
    }
    if (index < 1 && index > count) {
      throw new Error('적절한 검색 index를 입력하세요.')
    }

    /**
     * 재료의 조합 결과물 hamburger
     * Array hamburger
     */
    const downstack = []
    const upstack = []

    // count 만큼 입력 받기
    for (let i = 0; i < count; i++) {
      // 주어진 order에 따라서 아래->위로 쌓일지, 위->아래로 쌓일지 결정해서 배열에 넣어준다.
      const inputStack = stackHamburger(name, direction)
      if (inputStack.order === 0) {
        upstack.unshift(inputStack)
      } else {
        downstack.push(inputStack)
      }
    }

    const hamburger = upstack.concat(downstack)

    return hamburger[index].name
  } catch (error) {
    console.log(error)
  }
}

const stackHamburger = (name, direction) => {
  try {
    // direction에 따라 order 변수 지정해주기
    let order = null

    if (direction === '앞') {
      order = 0
    } else if (direction === '뒤') {
      order = 1
    } else {
      throw new Error('적절한 방향을 입력해주세요.')
    }

    /**
     * 재료 변수 item.
     * Object item -> {name: string order:  0 or 1}
     */
    let item = {
      name,
      order
    }
    return item
  } catch (error) {
    console.log(error)
  }
}

console.log(service(10, 1, '', ''))
