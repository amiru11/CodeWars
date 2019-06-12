const checkDuplicateId = (idCount, searchCount, idKeyword, searchKeyword) => {
  try {
    const idsArr = [] // 사용자명 담는 배열
    const keywordsArr = [] // 키워드 담는 배열
    const resultArr = [] // 매칭 결과값 담는 배열

    if (idCount < 1) {
      throw new Error('사용자 아이디 개수는 1개 이상입니다.')
    }
    if (searchCount < 1 && searchCount > 500) {
      throw new Error('문제개수는 500개 이하입니다.')
    }

    for (let i = 0; i < idCount; i++) {
      idsArr.push(inputIdKeyword(idKeyword))
    }

    for (let i = 0; i < searchCount; i++) {
      keywordsArr.push(inputSearchKeyword(searchKeyword))
    }

    // Compare idsArr to keywordsArr
    idsArr.forEach(userId => {
      keywordsArr.forEach(keyword => {
        if (userId === keyword) {
          resultArr.push(true)
        } else {
          resultArr.push(false)
        }
      })
    })

    return resultArr.indexOf(true) > -1 ? 'YES' : 'NO'
  } catch (error) {
    console.log(error)
  }
}

const inputIdKeyword = idKeyword => {
  return idKeyword
}

const inputSearchKeyword = searchKeyword => {
  return searchKeyword
}

console.log(checkDuplicateId(10, 1, '', ''))
