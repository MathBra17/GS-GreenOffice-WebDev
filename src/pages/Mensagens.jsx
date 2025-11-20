import React from 'react';
import { Link } from 'react-router-dom';

const Mensagens = ({ darkMode }) => {
  // Buscar mensagens do localStorage
  const mensagens = JSON.parse(localStorage.getItem('greenoffice_messages') || '[]');

  // Agrupar mensagens por profissional
  const mensagensPorProfissional = mensagens.reduce((acc, mensagem) => {
    if (!acc[mensagem.to]) {
      acc[mensagem.to] = {
        professionalId: mensagem.to,
        professionalName: mensagem.professionalName,
        messages: []
      };
    }
    acc[mensagem.to].messages.push(mensagem);
    return acc;
  }, {});

  const conversas = Object.values(mensagensPorProfissional);

  const limparMensagens = () => {
    if (window.confirm('Tem certeza que deseja limpar todas as mensagens?')) {
      localStorage.removeItem('futureWork_messages');
      window.location.reload(); // Recarregar para atualizar a lista
    }
  };

  return (
    <div className={`min-h-screen py-8 px-4 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        {/* <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`p-2 rounded-lg ${
                darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
              }`}
            >
              ← Voltar
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Minhas Mensagens</h1>
              <p className="opacity-70">
                {mensagens.length} mensagem{ensagens.length !== 1 ? 's' : ''} enviada{ensagens.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          
          {mensagens.length > 0 && (
            <button
              onClick={limparMensagens}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                darkMode 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              Limpar Tudo
            </button>
          )}
        </div> */}

        {/* Lista de Mensagens */}
        {conversas.length === 0 ? (
          <div className={`text-center py-16 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">Nenhuma mensagem enviada</h3>
            <p className="opacity-70 mb-6">
              Envie sua primeira mensagem para um profissional
            </p>
            <Link
              to="/contribuidores"
              className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Explorar Profissionais
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {conversas.map((conversa) => (
              <div
                key={conversa.professionalId}
                className={`rounded-xl border p-6 ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {conversa.professionalName}
                    </h3>
                    <p className="opacity-70">
                      {conversa.messages.length} mensagem{conversa.messages.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}>
                    Profissional
                  </span>
                </div>

                <div className="space-y-3">
                  {conversa.messages.slice(-3).map((mensagem, index) => ( // Mostrar apenas as 3 últimas
                    <div
                      key={mensagem.id || index}
                      className={`p-4 rounded-lg ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-sm ${
                          darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {mensagem.type === 'oportunidade' && '💼 Oportunidade'}
                          {mensagem.type === 'networking' && '🤝 Networking'}
                          {mensagem.type === 'duvida' && '❓ Dúvida'}
                          {mensagem.type === 'custom' && '✏️ Personalizada'}
                        </span>
                        <span className="text-sm opacity-70">
                          {new Date(mensagem.timestamp).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      <p className="whitespace-pre-wrap">{mensagem.message}</p>
                    </div>
                  ))}
                </div>

                {conversa.messages.length > 3 && (
                  <p className="text-center mt-4 opacity-70 text-sm">
                    + {conversa.messages.length - 3} mensagens anteriores
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mensagens;