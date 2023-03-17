from bitcoinlib.wallets import Wallet
w = Wallet.create('Wallet3')
key1 = w.get_key()
print(key1)
print("-----------")
print(key1.address)