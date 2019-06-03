USE SP_MEDIC_GROUP_DEV_MANHA

select * from MEDICO

SELECT * FROM USUARIO

--Retorna à quantidade de médicos de uma determinada especialidade
SELECT COUNT(*) AS ID_ESPECIALIZACAO FROM MEDICO WHERE ID_ESPECIALIZACAO='17'

--exibi o nome dos medicos e o nome de suas especialidades
SELECT M.NOME [MEDICO], E.NOME AS [ESPECIALIDADE]
FROM MEDICO AS M
INNER JOIN ESPECIALIZACAO AS E ON M.ID_USUARIOS = E.ID

--Cria uma função que calcula a idade do paciente
CREATE PROCEDURE calcular_idade
AS
SELECT NOME, DATA_NASCIMENTO, YEAR (GETDATE()) - YEAR (DATA_NASCIMENTO) FROM PRONTUARIO
GO;
--Executa a função em que calcula a idade do paciente
exec calcular_idade


