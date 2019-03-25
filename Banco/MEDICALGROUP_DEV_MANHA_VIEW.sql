USE SP_MEDIC_GROUP_DEV_MANHA



--Retorna � quantidade de m�dicos de uma determinada especialidade
SELECT COUNT(*) AS ID_ESPECIALIZACAO FROM MEDICO WHERE ID_ESPECIALIZACAO='17'

--exibi o nome dos medicos e o nome de suas especialidades
SELECT M.NOME [MEDICO], E.NOME AS [ESPECIALIDADE]
FROM MEDICO AS M
INNER JOIN ESPECIALIZACAO AS E ON M.ID = E.ID

--Cria uma fun��o que calcula a idade do paciente
CREATE PROCEDURE calcular_idade
AS
SELECT NOME, DATA_NASCIMENTO, YEAR (GETDATE()) - YEAR (DATA_NASCIMENTO) FROM PRONTUARIO
GO;

--Executa a fun��o em que calcula a idade do paciente
exec calcular_idade

SELECT * FROM TIPO_USUARIO
