function deleteDuplicates(head) {
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next; // Пропускаем дубликат
        } else {
            current = current.next; // Переходим к следующему узлу
        }
    }
    return head;
}
