using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class MedGroupContext : DbContext
    {
        public MedGroupContext()
        {
        }

        public MedGroupContext(DbContextOptions<MedGroupContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Clinica> Clinica { get; set; }
        public virtual DbSet<Consulta> Consulta { get; set; }
        public virtual DbSet<Especializacao> Especializacao { get; set; }
        public virtual DbSet<StatusConsulta> StatusConsulta { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        // Unable to generate entity type for table 'dbo.MEDICO'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.PRONTUARIO'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS; initial catalog = SP_MEDIC_GROUP_DEV_MANHA;user id = sa; pwd = 132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Clinica>(entity =>
            {
                entity.ToTable("CLINICA");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasColumnName("CNPJ")
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.Endereco)
                    .IsRequired()
                    .HasColumnName("ENDERECO")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .HasColumnName("NOME")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.RazaoSocial)
                    .IsRequired()
                    .HasColumnName("RAZAO_SOCIAL")
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Consulta>(entity =>
            {
                entity.ToTable("CONSULTA");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.DataConsulta)
                    .HasColumnName("DATA_CONSULTA")
                    .HasColumnType("datetime");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasColumnName("DESCRICAO")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.IdMedicos).HasColumnName("ID_MEDICOS");

                entity.Property(e => e.IdProntuarios).HasColumnName("ID_PRONTUARIOS");

                entity.Property(e => e.IdStatus).HasColumnName("ID_STATUS");

                entity.HasOne(d => d.IdMedicosNavigation)
                    .WithMany(p => p.ConsultaIdMedicosNavigation)
                    .HasForeignKey(d => d.IdMedicos)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CONSULTA__ID_MED__1D114BD1");

                entity.HasOne(d => d.IdProntuariosNavigation)
                    .WithMany(p => p.ConsultaIdProntuariosNavigation)
                    .HasForeignKey(d => d.IdProntuarios)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CONSULTA__ID_PRO__1C1D2798");

                entity.HasOne(d => d.IdStatusNavigation)
                    .WithMany(p => p.Consulta)
                    .HasForeignKey(d => d.IdStatus)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CONSULTA__ID_STA__1E05700A");
            });

            modelBuilder.Entity<Especializacao>(entity =>
            {
                entity.ToTable("ESPECIALIZACAO");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME")
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<StatusConsulta>(entity =>
            {
                entity.ToTable("STATUS_CONSULTA");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Nome)
                    .HasColumnName("NOME")
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.ToTable("TIPO_USUARIO");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME")
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.ToTable("USUARIO");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("EMAIL")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.IdTipo).HasColumnName("ID_TIPO");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasColumnName("SENHA")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.IdTipo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__USUARIO__ID_TIPO__1387E197");
            });
        }
    }
}
