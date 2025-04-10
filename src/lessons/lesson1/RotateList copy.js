function rotateRight(head, k) {
    if (!head || !head.next || k === 0) return head;

    // 1. Определяем длину списка
    let length = 1, tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // 2. Определяем фактическое смещение (k может быть больше длины списка)
    k = k % length;
    if (k === 0) return head;

    // 3. Делаем список цикличным
    tail.next = head;

    // 4. Находим новую голову (двигаемся length - k шагов от старой головы)
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }

    // 5. Разрываем цикл и устанавливаем новую голову
    head = newTail.next;
    newTail.next = null;

    return head;
}
