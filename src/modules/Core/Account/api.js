// Core/Account/api.js

export const logout = account => {
  return account.logout()
}

export const createWalletRequest = (account, keys, walletType) => {
  return account.createWallet(walletType, keys)
}

export const activateWalletRequest = (account, walletId) => {
  return account.changeWalletStates({
    [walletId]: { archived: false }
  })
}

export const archiveWalletRequest = (account, walletId) => {
  return account.changeWalletStates({
    [walletId]: { archived: true }
  })
}

export const deleteWalletRequest = (account, walletId) => {
  return account.changeWalletStates({
    [walletId]: { deleted: true }
  })
}

export const updateActiveWalletsOrderRequest = (account, activeWalletIds) => {
  const newKeyStates = activeWalletIds.reduce((keyStates, id, index) => {
    keyStates[id] = { sortIndex: index }
    return keyStates
  }, {})
  return account.changeWalletStates(newKeyStates)
}

export const updateArchivedWalletsOrderRequest = (account, archivedWalletIds) => {
  const newKeyStates = archivedWalletIds.reduce((keyStates, id, index) => {
    keyStates[id] = { sortIndex: index }
    return keyStates
  }, {})

  return account.changeWalletStates(newKeyStates)
}
