import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z
  .object({
    name: z.string().trim().min(2, "Name is required").max(60, "Name is too long"),
    email: z.string().trim().min(1, "Email is required").email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm: z.string(),
  })
  .refine((v) => v.password === v.confirm, { path: ["confirm"], message: "Passwords do not match" });
type Values = z.infer<typeof schema>;

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create account — Flameflow" },
      { name: "description", content: "Create a Flameflow account to manage independent software projects." },
      { property: "og:title", content: "Create account — Flameflow" },
      { property: "og:description", content: "Start managing your projects with Flameflow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "", confirm: "" },
  });
  const onSubmit = async (values: Values) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success(`Account created for ${values.name} (simulated)`);
    navigate({ to: "/dashboard", search: { projectId: "ngo-ledger", section: "overview" } });
  };
  const err = form.formState.errors;
  return (
    <AuthLayout title="Create account" subtitle="Set up your Flameflow workspace in a moment.">
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" autoComplete="name" className="mt-1.5" {...form.register("name")} />
          {err.name && <p className="mt-1.5 text-sm text-destructive">{err.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" className="mt-1.5" {...form.register("email")} />
          {err.email && <p className="mt-1.5 text-sm text-destructive">{err.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" autoComplete="new-password" className="mt-1.5" {...form.register("password")} />
          {err.password && <p className="mt-1.5 text-sm text-destructive">{err.password.message}</p>}
        </div>
        <div>
          <Label htmlFor="confirm">Confirm password</Label>
          <Input id="confirm" type="password" autoComplete="new-password" className="mt-1.5" {...form.register("confirm")} />
          {err.confirm && <p className="mt-1.5 text-sm text-destructive">{err.confirm.message}</p>}
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Creating account..." : "Create account"}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account? <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link>
      </p>
    </AuthLayout>
  );
}
