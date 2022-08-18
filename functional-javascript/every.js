function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every((subUser)=>{
            return goodUsers.some((gdUser)=>{
                return gdUser.id == subUser.id
            })
        })
    };
}

module.exports = checkUsersValid