export const getInputs = () => {
    return [
        { type: 'text', name: 'name', placeholder: 'Nome...', label: 'Nome Completo:' },
        { type: 'date', name: 'birthdate', placeholder: '...', label: 'Data de Nascimento:' },
        { type: 'text', name: 'cpf', placeholder: 'CPF...', label: 'CPF:' },
        { type: 'text', name: 'number', placeholder: 'Telefone...', label: 'Telefone:' },
        { type: 'email', name: 'mail', placeholder: 'Email...', label: 'Email:' },
        { type: 'RG:', name: 'rg', placeholder: 'RG...', label: 'RG:' },
    ]
}