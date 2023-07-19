import { BehaviorSubject } from "rxjs"

export const usdcxWalletBalanceSub = new BehaviorSubject<[string,string] | undefined>(undefined)
