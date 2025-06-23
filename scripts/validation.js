document.querySelectorAll('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Останавливаем отправку формы

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    let hasError = false;

    // Проверка имени (только буквы и пробелы)
    if (!/^[А-Яа-яЁё\s\-]{2,30}$/.test(name)) {
      alert('Введите корректное имя (только русские буквы, 2-30 символов)');
      hasError = true;
    }

    // Проверка телефона (например, +7 (123) 456-78-90 или 89123456789)
    if (!/^(\+7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/.test(phone)) {
      alert('Введите корректный номер телефона');
      hasError = true;
    }

    if (!hasError) {
      alert('Форма успешно отправлена!');
      // Здесь можно отправить форму, например, через fetch или просто form.submit()
      // this.submit(); — если хотите отправить как обычно
    }
  });
