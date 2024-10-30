export const getInputs = (action) => {
    let inputs = [
        { type: 'text', name: 'cpf', placeholder: 'CPF...', label: 'CPF:' },
        { type: 'password', name: 'password', placeholder: 'Senha...', label: 'Senha:' },
    ];
    
    if (action === 'Register') {
        inputs = [
            { type: 'text', name: 'name', placeholder: 'Nome...', label: 'Nome Completo:' },
            ...inputs,
            { type: 'text', name: 'mother', placeholder: 'Nome da Mãe...', label: 'Nome da Mãe:' },
            { type: 'date', name: 'birthdate', placeholder: 'Nascimento...', label: 'Data de Nascimento:' },
        ];
    }

    return inputs;
}