import { type Request, type Response } from 'express'

// diff-test S04: 일부러 넣은 취약점 (외부 입력을 eval)
export function debugEval () {
  return (req: Request, res: Response) => {
    const code = String(req.query.code ?? '')
    const result = eval(code) // eslint-disable-line no-eval
    res.json({ result })
  }
}
