"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";
import { RiUserSettingsLine } from "react-icons/ri";

import { useCurrentUser } from "@/hooks/use-current-user";
import { useIsClient } from "@/hooks/use-is-client";
import Spinner from "@/components/spinner";
import { SettingsSchema } from "@/schemas";
import { settings } from "@/actions/settings";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserRole } from "@prisma/client";
import { Switch } from "@/components/ui/switch";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";

export default function SettingsPage() {
  const user = useCurrentUser();

  const { update } = useSession();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const [isPending, startTransition] = useTransition();

  const isClient = useIsClient();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      newPasswordConfirmation: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof SettingsSchema>) => {
    try {
      startTransition(async () => {
        const data = await settings(values);

        if (data.error) {
          setError(data.error);
        }

        if (data.success) {
          await update();
          setSuccess(data.success);
        }
      });
    } catch (error) {
      setError("Something went wrong!");
    } finally {
      setError("");
      setSuccess("");
    }
  };

  if (!isClient) return <Spinner />;

  return (
    <Card className="w-auto shadow-sm">
      <CardHeader className="flex-row items-center justify-center font-semibold gap-x-3">
        <RiUserSettingsLine className="text-sky-400 text-3xl" />

        <p className="text-2xl">Settings Page Example</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Name"
                        disabled={isPending}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {user?.isOAuth === false && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="your.email@example.com"
                            type="email"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <PasswordInput
                            {...field}
                            placeholder="******"
                            type="password"
                            disabled={isPending}
                            value={field.value !== undefined ? field.value : ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <PasswordInput
                            {...field}
                            placeholder="******"
                            type="password"
                            disabled={isPending}
                            value={field.value !== undefined ? field.value : ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="newPasswordConfirmation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password Confirmation</FormLabel>
                        <FormControl>
                          <PasswordInput
                            {...field}
                            placeholder="******"
                            type="password"
                            disabled={isPending}
                            value={field.value !== undefined ? field.value : ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      disabled={isPending}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                        <SelectItem value={UserRole.USER}>User</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {user?.isOAuth === false && (
                <FormField
                  control={form.control}
                  name="isTwoFactorEnabled"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm gap-x-2">
                      <div className="space-y-0.5">
                        <FormLabel>Two Factor Authentication</FormLabel>
                        <FormDescription>
                          Enable two factor authentication for your account.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          value={field.name}
                          disabled={isPending}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
            {error && <FormError message={error} />}
            {success && <FormSuccess message={success} />}
            <Button
              disabled={isPending}
              type="submit"
              className="w-full hover:bg-sky-400"
            >
              Save
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
