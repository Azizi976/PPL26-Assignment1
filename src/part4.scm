; Signature:
; Type:
; Purpose:
; Pre-conditions:
; Tests:

(define last-item
 (lambda (lst)
     (if (null? (cdr lst))
        (car lst)
        (last-item (cdr lst))))
)

(cdr (list 1 2 3 4))

(define remove-last-item
  (λ (lst)
    'todo))

(define rotate-nth
  (λ (lst n)
   'todo))

(define deep-reverse
  (λ (l)
    'todo))