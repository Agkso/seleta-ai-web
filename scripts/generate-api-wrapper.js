import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const servicesDir = path.resolve(__dirname, "../app/api/generated/services");
const outputFile = path.resolve(__dirname, "../app/api/client/myApi.ts");

let imports = "";
let apiObject = {};

const files = fs.readdirSync(servicesDir);

files.forEach((file) => {
  if (!file.endsWith(".ts")) return;

  const serviceName = file.replace(".ts", "");
  const content = fs.readFileSync(path.join(servicesDir, file), "utf-8");

  const domain = serviceName
    .replace("ControllerService", "")
    .replace("Service", "")
    .replace("Controller", "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .split("-")[0];

  imports += `import { ${serviceName} } from "../generated/services/${serviceName}";\n`;

  if (!apiObject[domain]) {
    apiObject[domain] = [];
  }

    const methods = [...content.matchAll(/static (\w+)\(([^)]*)\)/g)];

  methods.forEach((match) => {
  const methodName = match[1];
  const paramsSignature = match[2].trim();

  const hasParams = paramsSignature.length > 0;

  if (hasParams) {
    apiObject[domain].push(`
    ${methodName}: (
      params: Parameters<typeof ${serviceName}.${methodName}>[0]
    ): ReturnType<typeof ${serviceName}.${methodName}> =>
      ${serviceName}.${methodName}(params)
    `);
  } else {
    apiObject[domain].push(`
    ${methodName}: (): ReturnType<typeof ${serviceName}.${methodName}> =>
      ${serviceName}.${methodName}()
    `);
  }
});
});

let output = `// AUTO-GENERATED FILE\n\n${imports}\n`;

output += `export const myApi = {\n`;

Object.entries(apiObject).forEach(([domain, methods]) => {
  output += `
  ${domain}: {${methods.join(",")}
  },
  `;
});

output += `};\n`;

fs.mkdirSync(path.dirname(outputFile), { recursive: true });

fs.writeFileSync(outputFile, output);

console.log("🔥 myApi tipado automaticamente gerado!");